
import { EventEmitter } from 'events'
import * as httpMocks from 'node-mocks-http'

import * as OauthErrors from '../src'
import { Oauth2Error } from '../src/oauth2_error'

describe('OauthErrors', () => {
  it('should have all the errors', () => {
    expect(OauthErrors.InvalidClient).toBeTruthy()
    expect(OauthErrors.InvalidGrant).toBeTruthy()
    expect(OauthErrors.InvalidRequest).toBeTruthy()
    expect(OauthErrors.InvalidScope).toBeTruthy()
    expect(OauthErrors.UnauthorizedGrantType).toBeTruthy()
    expect(OauthErrors.UnauthorizedClient).toBeTruthy()
  })

  describe('InvalidClient', () => {
    it('should be an instance of an Oauth2Error', () => {
      const oe = new OauthErrors.InvalidClient()
      expect(oe).toBeInstanceOf(Oauth2Error)
    })

    it('should have the correct properties', () => {
      const oe = new OauthErrors.InvalidClient({
        description: 'test',
        uri: 'http://test.com/error'
      })
      expect(oe).toBeInstanceOf(Oauth2Error)
      expect(oe.statusCode).toBe(401)
      expect(oe.error).toBe('invalid_client')
      expect(oe.error_description).toBeTruthy()
      expect(oe.error_uri).toBeTruthy()
    })
  })

  describe('InsufficientScope', () => {
    it('should be an instance of an Oauth2Error', () => {
      const oe = new OauthErrors.InsufficientScope()
      expect(oe).toBeInstanceOf(Oauth2Error)
    })

    it('should have the correct properties', () => {
      const oe = new OauthErrors.InsufficientScope({
        description: 'test',
        uri: 'http://test.com/error'
      })
      expect(oe).toBeInstanceOf(Oauth2Error)
      expect(oe.statusCode).toBe(403)
      expect(oe.error).toBe('insufficient_scope')
      expect(oe.error_description).toBeTruthy()
      expect(oe.error_uri).toBeTruthy()
    })
  })

  describe('InvalidGrant', () => {
    it('should be an instance of an Oauth2Error', () => {
      const oe = new OauthErrors.InvalidGrant()
      expect(oe).toBeInstanceOf(Oauth2Error)
    })

    it('should have the correct properties', () => {
      const oe = new OauthErrors.InvalidGrant({
        description: 'test',
        uri: 'http://test.com/error'
      })
      expect(oe).toBeInstanceOf(Oauth2Error)
      expect(oe.statusCode).toBe(400)
      expect(oe.error).toBe('invalid_grant')
      expect(oe.error_description).toBeTruthy()
      expect(oe.error_uri).toBeTruthy()
    })
  })

  describe('InvalidRequest', () => {
    it('should be an instance of an Oauth2Error', () => {
      const oe = new OauthErrors.InvalidRequest()
      expect(oe).toBeInstanceOf(Oauth2Error)
    })

    it('should have the correct properties', () => {
      const oe = new OauthErrors.InvalidRequest()
      expect(oe).toBeInstanceOf(Oauth2Error)
      expect(oe.statusCode).toBe(400)
      expect(oe.error).toBe('invalid_request')
      expect(oe.error_description).toBeFalsy()
      expect(oe.error_uri).toBeFalsy()
    })
  })

  describe('InvalidScope', () => {
    it('should be an instance of an Oauth2Error', () => {
      const oe = new OauthErrors.InvalidScope()
      expect(oe).toBeInstanceOf(Oauth2Error)
    })

    it('should have the correct properties', () => {
      const oe = new OauthErrors.InvalidScope({
        description: 'test',
        uri: 'http://test.com/error'
      })
      expect(oe).toBeInstanceOf(Oauth2Error)
      expect(oe.statusCode).toBeTruthy()
      expect(oe.error).toBe('invalid_scope')
      expect(oe.error_description).toBeTruthy()
      expect(oe.error_uri).toBeTruthy()
    })
  })

  describe('InvalidToken', () => {
    it('should be an instance of an Oauth2Error', () => {
      const oe = new OauthErrors.InvalidToken()
      expect(oe).toBeInstanceOf(Oauth2Error)
    })

    it('should have the correct properties', () => {
      const oe = new OauthErrors.InvalidToken({
        description: 'test',
        uri: 'http://test.com/error'
      })
      expect(oe).toBeInstanceOf(Oauth2Error)
      expect(oe.statusCode).toBe(401)
      expect(oe.error).toBe('invalid_token')
      expect(oe.error_description).toBeTruthy()
      expect(oe.error_uri).toBeTruthy()
    })
  })

  describe('UnauthorizedClient', () => {
    it('should be an instance of an Oauth2Error', () => {
      const oe = new OauthErrors.UnauthorizedClient()
      expect(oe).toBeInstanceOf(Oauth2Error)
    })

    it('should have the correct properties', () => {
      const oe = new OauthErrors.UnauthorizedClient({
        description: 'test',
        uri: 'http://test.com/error'
      })
      expect(oe).toBeInstanceOf(Oauth2Error)
      expect(oe.statusCode).toBeTruthy()
      expect(oe.error).toBe('unauthorized_client')
      expect(oe.error_description).toBeTruthy()
      expect(oe.error_uri).toBeTruthy()
    })
  })

  describe('UnauthorizedGrantType', () => {
    it('should be an instance of an Oauth2Error', () => {
      const oe = new OauthErrors.UnauthorizedGrantType()
      expect(oe).toBeInstanceOf(Oauth2Error)
    })

    it('should have the correct properties', () => {
      const oe = new OauthErrors.UnauthorizedGrantType({
        description: 'test',
        uri: 'http://test.com/error'
      })
      expect(oe).toBeInstanceOf(Oauth2Error)
      expect(oe.statusCode).toBeTruthy()
      expect(oe.error).toBe('unauthorized_grant_type')
      expect(oe.error_description).toBeTruthy()
      expect(oe.error_uri).toBeTruthy()
    })
  })

  describe('AccessDenied', () => {
    it('should be an instance of an Oauth2Error', () => {
      const oe = new OauthErrors.AccessDenied()
      expect(oe).toBeInstanceOf(Oauth2Error)
    })

    it('should have the correct properties', () => {
      const oe = new OauthErrors.AccessDenied({
        description: 'test',
        uri: 'http://test.com/error'
      })
      expect(oe).toBeInstanceOf(Oauth2Error)
      expect(oe.statusCode).toBe(403)
      expect(oe.error).toBe('access_denied')
      expect(oe.error_description).toBeTruthy()
      expect(oe.error_uri).toBeTruthy()
    })
  })

  describe('UnsupportedResponseType', () => {
    it('should be an instance of an Oauth2Error', () => {
      const oe = new OauthErrors.UnsupportedResponseType()
      expect(oe).toBeInstanceOf(Oauth2Error)
    })

    it('should have the correct properties', () => {
      const oe = new OauthErrors.UnsupportedResponseType({
        description: 'test',
        uri: 'http://test.com/error'
      })
      expect(oe).toBeInstanceOf(Oauth2Error)
      expect(oe.statusCode).toBeTruthy()
      expect(oe.error).toBe('unsupported_response_type')
      expect(oe.error_description).toBeTruthy()
      expect(oe.error_uri).toBeTruthy()
    })
  })

  describe('ServerError', () => {
    it('should be an instance of an Oauth2Error', () => {
      const oe = new OauthErrors.ServerError()
      expect(oe).toBeInstanceOf(Oauth2Error)
    })

    it('should have the correct properties', () => {
      const oe = new OauthErrors.ServerError({
        description: 'test',
        uri: 'http://test.com/error'
      })
      expect(oe).toBeInstanceOf(Oauth2Error)
      expect(oe.statusCode).toBe(500)
      expect(oe.error).toBe('server_error')
      expect(oe.error_description).toBeTruthy()
      expect(oe.error_uri).toBeTruthy()
    })
  })
  describe('TemporarilyUnavailable', () => {
    it('should be an instance of an Oauth2Error', () => {
      const oe = new OauthErrors.TemporarilyUnavailable()
      expect(oe).toBeInstanceOf(Oauth2Error)
    })

    it('should have the correct properties', () => {
      const oe = new OauthErrors.TemporarilyUnavailable({
        description: 'test',
        uri: 'http://test.com/error'
      })
      expect(oe).toBeInstanceOf(Oauth2Error)
      expect(oe.statusCode).toBeTruthy()
      expect(oe.error).toBe('temporarily_unavailable')
      expect(oe.error_description).toBeTruthy()
      expect(oe.error_uri).toBeTruthy()
    })
  })

  describe('toString', () => {
    it('should be a string', () => {
      const oe = new OauthErrors.InvalidClient({
        description: 'test',
        uri: 'http://test.com/error'
      })
      const s = oe.toString()
      expect(typeof s).toBe('string')
    })

    it('should not have `statusCode`', () => {
      const oe = new OauthErrors.InvalidClient({
        description: 'test',
        uri: 'http://test.com/error'
      })
      const s = oe.toString()
      const js = JSON.parse(s)
      expect(js.statusCode).toBeFalsy()
      expect(js.error).toBeTruthy()
      expect(js.error_description).toBeTruthy()
      expect(js.error_uri).toBeTruthy()
    })

    it('should not have `error_description`', () => {
      const oe = new OauthErrors.InvalidClient({
        uri: 'http://test.com/error'
      })
      const s = oe.toString()
      const js = JSON.parse(s)
      expect(js.statusCode).toBeFalsy()
      expect(js.error).toBeTruthy()
      expect(js.error_description).toBeFalsy()
      expect(js.error_uri).toBeTruthy()
    })
  })

  describe('respond', () => {
    it('should respond with status `400` and correct properties', (done) => {
      const mockResponse = httpMocks.createResponse({ eventEmitter: EventEmitter })
      const oe = new OauthErrors.InvalidClient({
        description: 'test',
        uri: 'http://test.com/error'
      })
      mockResponse.on('end', () => {
        const resData = JSON.parse(mockResponse._getData())
        expect(resData.error).toEqual('invalid_client')
        expect(resData.error_description).toBe('test')
        expect(resData.error_uri).toBe('http://test.com/error')
        expect(mockResponse._getStatusCode()).toBe(401)
        done()
      })
      // Call here for test
      oe.respond(mockResponse)
    })

    it('should respond with correct properties', (done) => {
      const mockResponse = httpMocks.createResponse({ eventEmitter: EventEmitter })
      const oe = new OauthErrors.InvalidGrant()
      mockResponse.on('end', () => {
        const resData = JSON.parse(mockResponse._getData())
        expect(resData.error).toEqual('invalid_grant')
        expect(resData.error_description).toBeFalsy()
        expect(resData.error_uri).toBeFalsy()
        expect(mockResponse._getStatusCode()).toBe(400)
        done()
      })
      // Call here for test
      oe.respond(mockResponse)
    })
  })

})
