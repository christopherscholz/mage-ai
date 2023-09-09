from pathlib import Path
from unittest.mock import MagicMock, patch

import pandas as pd

from mage_ai.data_preparation.models.block.dbt_new import DBTBlock
from mage_ai.data_preparation.models.block.dbt_new.block_sql import DBTBlockSQL
from mage_ai.data_preparation.models.block.dbt_new.block_yaml import DBTBlockYAML
from mage_ai.data_preparation.models.constants import BlockLanguage, BlockType
from mage_ai.tests.base_test import TestCase


class DBTBlockTest(TestCase):
    @classmethod
    def setUpClass(self):
        super().setUpClass()

        pipeline = MagicMock()
        pipeline.uuid = 'test'
        pipeline.repo_path = 'test_repo_path'

        self.block_sql = MagicMock()
        self.block_sql.name = 'test_block_sql'
        self.block_sql.uuid = 'test_block_sql'
        self.block_sql.block_type = BlockType.DATA_LOADER
        self.block_sql.language = BlockLanguage.SQL
        self.block_sql.pipeline = pipeline

        self.dbt_block_sql = DBTBlock(
            name='test_dbt_block_sql',
            uuid='test_dbt_block_sql',
            block_type=BlockType.DBT,
            language=BlockLanguage.SQL,
            configuration={
                'file_path': str(Path('test_project_name/models/model.sql')),
                'dbt': {'disable_tests': True}
            },
            pipeline=pipeline,
        )

        self.dbt_block_yaml = DBTBlock(
            name='test_dbt_block_yaml',
            uuid='test_dbt_block_yaml',
            block_type=BlockType.DBT,
            language=BlockLanguage.YAML,
            pipeline=pipeline,
            configuration={
                'dbt_project_name': 'test_project_name'
            }
        )

        self.dbt_block_yaml.upstream_blocks = [self.block_sql]
        self.dbt_block_sql.upstream_blocks = [
            self.block_sql,
            self.dbt_block_yaml
        ]
        self.block_sql.downstream_blocks = [
            self.dbt_block_sql,
            self.dbt_block_yaml
        ]

    @classmethod
    def tearDownClass(self):
        super().tearDownClass()

    def test_new_sql_block(self):
        self.assertTrue(isinstance(self.dbt_block_sql, DBTBlock))
        self.assertTrue(isinstance(self.dbt_block_sql, DBTBlockSQL))
        self.assertFalse(isinstance(self.dbt_block_sql, DBTBlockYAML))

    def test_new_yaml_block(self):
        self.assertTrue(isinstance(self.dbt_block_yaml, DBTBlock))
        self.assertFalse(isinstance(self.dbt_block_yaml, DBTBlockSQL))
        self.assertTrue(isinstance(self.dbt_block_yaml, DBTBlockYAML))

    def test_base_project_path(self):
        self.assertTrue(
            Path(self.dbt_block_sql.base_project_path).match('test_repo_path/dbt')
        )

    def test_dbt_configuration(self):
        self.assertEqual(self.dbt_block_sql._dbt_configuration, {'disable_tests': True})
        self.assertEqual(self.dbt_block_yaml._dbt_configuration, {})

    def test_variables_json(self):
        self.assertEqual(
            self.dbt_block_sql._variables_json({
                'key1': 1,
                'key2': 'foo',
                'key3': ['bar']
            }),
            '{"key1": 1, "key2": "foo", "key3": ["bar"]}'
        )

    @patch('mage_ai.data_preparation.models.block.dbt_new.block.Sources')
    @patch('mage_ai.data_preparation.models.block.dbt_new.block.DBTAdapter')
    def test_update_sources(self, DBTAdapter, Sources):
        DBTAdapter.return_value.__enter__.return_value.credentials.schema = 'public'
        DBTAdapter.return_value.__enter__.return_value.credentials.database = None
        Sources.return_value.reset_pipeline = MagicMock()

        DBTBlock.update_sources({
            'test_block_sql': self.block_sql,
            'test_dbt_block_sql': self.dbt_block_sql,
            'test_dbt_block_yaml': self.dbt_block_yaml
        })

        Sources.return_value.reset_pipeline.assert_called_once_with(
            pipeline_uuid='test',
            block_uuids=['test_block_sql'],
            schema='public',
            database=None
        )

    @patch('mage_ai.data_preparation.models.block.dbt_new.block.DBTAdapter')
    def test_materialize_df(self, DBTAdapter):
        DBTAdapter.return_value.__enter__.return_value.credentials.schema = 'public'
        DBTAdapter.return_value.__enter__.return_value.credentials.database = None
        DBTAdapter.return_value.__enter__.return_value.get_relation.return_value = {
            'database': None,
            'schema': 'public',
            'identifier': 'mage_test_test_dbt_block_sql',
            'type': 'table'
        }
        DBTAdapter.return_value.__enter__.return_value.execute_macro = MagicMock()

        DBTBlock.materialize_df(
            df=pd.DataFrame({'col1': [1, 2], 'col2': [3, 4]}),
            pipeline_uuid='test',
            block_uuid='test_dbt_block_sql',
            project_paths=['test_repo_path/dbt/test_project_name']
        )

        DBTAdapter.return_value.__enter__.return_value.get_relation.assert_called_once_with(
            database=None,
            schema='public',
            identifier='mage_test_test_dbt_block_sql'
        )

        DBTAdapter.return_value.__enter__.return_value.execute_macro.assert_called()
