/*
Библиотека axios нужна для выполнения асинхронных запросы на сервер.
Здесь экспортируется объект axios с базовым url api сервера.
По умолчанию все запросы делаются в формате JSON.
 */

import axios from 'axios'

export const HTTP = axios.create({
  baseURL: 'http://localhost:8000/api/v1/'
})
