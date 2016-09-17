;(function () {
  'use strict'

  /* global angular */
  angular.module('Authentication')
    .factory('AuthKeyInterceptor', AuthKeyInterceptor)
    .config(addAuthKeyInterceptor)

  AuthKeyInterceptor.$inject = ['$q', '$state', 'Session']

  function AuthKeyInterceptor ($q, $state, Session) {
    var AuthKeyInterceptorBase = {
      request: request,
      responseError: responseError
    }

    function request (config) {
      config.params = config.params || {}
      if (Session.isLoggedIn()) {
        config.params.auth_key = Session.token
      }
      return $q.when(config)
    }

    function responseError (response) {
      if (response.status === 401) {
        $state.go('login')
      }
      return $q.reject(response)
    }

    return AuthKeyInterceptorBase
  }

  addAuthKeyInterceptor.$inject = ['$httpProvider']

  function addAuthKeyInterceptor ($httpProvider) {
    $httpProvider.interceptors.push('AuthKeyInterceptor')
  }
}
