ARG PYTHON_VERSION=3.10
FROM python:${PYTHON_VERSION}
LABEL description="Deploy Mage on ECS"
ARG PIP=pip3
ARG MAGE_CODE_PATH="/home/src"
ARG PY_PACKAGES_USER="/opt/mage/python_packages"
ARG R_PACKAGES_USER="/opt/mage/r_packages"
USER root

# Packages
RUN \
  curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - && \
  curl https://packages.microsoft.com/config/debian/11/prod.list > /etc/apt/sources.list.d/mssql-release.list && \
  apt-get -y update && \
  ACCEPT_EULA=Y apt-get -y install --no-install-recommends \
    # NFS dependencies
    nfs-common \
    # odbc dependencies
    msodbcsql18\
    unixodbc-dev \
    # pymssql dependencies
    freetds-dev \
    freetds-bin \
    # R
    r-base && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*

# R Packages
RUN \
  R -e "install.packages('pacman', repos='http://cran.us.r-project.org')" && \
  R -e "install.packages('renv', repos='http://cran.us.r-project.org')"

# Python Packages
ENV SPARKMAGIC_CONF_DIR="/etc/sparkmagic"
RUN \
  ${PIP} install --no-cache-dir sparkmagic && \
  mkdir -p ${SPARKMAGIC_CONF_DIR} && \
  wget https://raw.githubusercontent.com/jupyter-incubator/sparkmagic/master/sparkmagic/example_config.json && \
  mv example_config.json ${SPARKMAGIC_CONF_DIR}/config.json && \
  sed -i 's/localhost:8998/host.docker.internal:9999/g' ${SPARKMAGIC_CONF_DIR}/config.json && \
  jupyter-kernelspec install $(${PIP} show sparkmagic | grep Location | cut -d" " -f2)/sparkmagic/kernels/pysparkkernel
# Mage Integration
RUN ${PIP} install --no-cache-dir "git+https://github.com/mage-ai/singer-python.git#egg=singer-python"
RUN ${PIP} install --no-cache-dir "git+https://github.com/mage-ai/google-ads-python.git#egg=google-ads"
RUN ${PIP} install --no-cache-dir "git+https://github.com/mage-ai/dbt-mysql.git#egg=dbt-mysql"
RUN ${PIP} install --no-cache-dir "git+https://github.com/mage-ai/mage-ai.git#egg=mage-integrations&subdirectory=mage_integrations"
# Mage
COPY ./mage_ai/server/constants.py constants.py
RUN tag=$(tail -n 1 constants.py) && VERSION=$(echo $tag | tr -d "'") && ${PIP} install --no-cache-dir "mage-ai[all]"==$VERSION

# Startup Script
COPY --chmod=+x ./scripts/install_other_dependencies.py ./scripts/run_app.sh /app/

# Path for Mage Data/Project
ENV MAGE_CODE_PATH="${MAGE_CODE_PATH}"
ENV MAGE_DATA_DIR="$MAGE_CODE_PATH/mage_data"
ENV PYTHONPATH="${MAGE_CODE_PATH}"
RUN mkdir -p ${MAGE_CODE_PATH} && chmod 777 ${MAGE_CODE_PATH}
WORKDIR ${MAGE_CODE_PATH}

# Path for additional Python packages
ENV PIP_TARGET="${PY_PACKAGES_USER}"
ENV PIP_CACHE_DIR="${PY_PACKAGES_USER}/.cache"
ENV IPYTHONDIR="${PY_PACKAGES_USER}/.ipython"
ENV PYTHONPATH="${PIP_TARGET}:${PYTHONPATH}"
ENV PATH="${PIP_TARGET}/bin:$PATH"
RUN mkdir -p ${PIP_TARGET} && chmod 777 ${PIP_TARGET}

# Path for additional R packages
ENV R_LIBS_USER=${R_PACKAGES_USER}
RUN mkdir -p ${R_LIBS_USER} && chmod 777 ${R_LIBS_USER}

EXPOSE 6789
EXPOSE 7789
USER 1000:1000

CMD ["/bin/bash", "-c", "/app/run_app.sh"]
