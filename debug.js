;(function () {
  'use strict'

  /* global angular */
  angular.module('appConfig')
    .config(function config ($compileProvider) {
      $compileProvider.debugInfoEnabled(false)
    })
})()
