
import { EventEmitter } from 'events'
import * as httpMocks from 'node-mocks-http'

import * as OauthErrors from '../src'
import { Oauth2Error } from '../src/oauth2_error'

describe('OauthErrors', () => {
  it('should create an instance of an Oauth2Error', () => {
    const oe = new OauthErrors.InvalidClient()
    expect(oe).toBeInstanceOf(Oauth2Error)
  })

  it('should have the correct properties', () => {
    const oe = new OauthErrors.InvalidClient({ 
      description: 'test',
      uri: 'http://test.com/error'
    })
    expect(oe).toBeInstanceOf(Oauth2Error)
    expect(oe.statusCode).toBeTruthy()
    expect(oe.error).toBeTruthy()
    expect(oe.error_description).toBeTruthy()
    expect(oe.error_uri).toBeTruthy()
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
        expect(mockResponse._getStatusCode()).toBe(400)
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
