### Hexlet tests and linter status:
[![Actions Status](https://github.com/velesfight/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/velesfight/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/78268ac96702d411ddf7/maintainability)](https://codeclimate.com/github/velesfight/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/78268ac96702d411ddf7/test_coverage)](https://codeclimate.com/github/velesfight/frontend-project-46/test_coverage)

# Вычислитель отличий

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. 
## Инструкция по запуску программы
  1. Склонируйте данный репозиторий проекта локально.
  2. Выполните команду "make install".
  3. Используйте команды ниже для сравнения данных.



## JSON
`gendiff __fixtures__/file1.json __fixtures__/file2.json`
[Пример](https://asciinema.org/a/6ioDoI545k2bPXVEJSab7PgFW)
[![asciicast](https://asciinema.org/a/6ioDoI545k2bPXVEJSab7PgFW.svg)](https://asciinema.org/a/6ioDoI545k2bPXVEJSab7PgFW)

## Yaml
`gendiff __fixtures__/file1.yaml __fixtures__/file2.yaml`
[Пример](https://asciinema.org/a/Xw9rCh610rQ9LUM0OQTSKwFVK)
[![asciicast](https://asciinema.org/a/Xw9rCh610rQ9LUM0OQTSKwFVK.svg)](https://asciinema.org/a/Xw9rCh610rQ9LUM0OQTSKwFVK)

## Stylish
`gendiff __fixtures__/file1.json __fixtures__/file2.json`
[Пример](https://asciinema.org/a/eBoE0UcVTaJ50ekJZWu72WQgf)
[![asciicast](https://asciinema.org/a/eBoE0UcVTaJ50ekJZWu72WQgf.svg)](https://asciinema.org/a/eBoE0UcVTaJ50ekJZWu72WQgf)

## Plain
`gendiff --format plain __fixtures__/file1.json __fixtures__/file2.json`
[Пример](https://asciinema.org/a/oQIce5oINl4jSqIrx8eFQsmTn)
[![asciicast](https://asciinema.org/a/oQIce5oINl4jSqIrx8eFQsmTn.svg)](https://asciinema.org/a/oQIce5oINl4jSqIrx8eFQsmTn)