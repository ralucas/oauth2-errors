
export type oauthParams = {
  description?: string
  uri?: string
}

export class Oauth2Error extends Error {
  public error: string
  public error_description: string
  public error_uri: string
  public statusCode: number

  constructor (params: any) {
    super(params.error)
    this.error = params.error
    this.error_description = params.error_description
    this.error_uri = params.error_uri
    this.statusCode = params.statusCode || 400

    Object.setPrototypeOf(this, Oauth2Error.prototype)
  }

  public respond (res: any) {
    const statusCode = this.statusCode
    const jsonResponse = this.toString()
    return res
      .type('application/json')
      .status(statusCode)
      .send(jsonResponse)
  }

  public toString (): string {
    return JSON.stringify({
      error: this.error,
      error_description: this.error_description,
      error_uri: this.error_uri
    })
  }
}
