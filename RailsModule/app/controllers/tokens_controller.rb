class TokensController < ApplicationController
  def create
    user = User.find_by(username: params[:username], password: params[:password])
    if user.nil?
      render json: {
          errors: [
              'username or password is invalid.'
          ]
      }, status: 400
      return
    end

    token = Token.new_token(user)
    unless token.save
      render json: {
          errors: [
              'could not issue token.'
          ]
      }, status: 500
      return
    end

    render json: {
        authentication_token: token.authentication_token
    }
  end

  def destroy
    token = Token.find_by(authentication_token: params[:authentication_token])
    if token.nil?
      render json: {
          errors: [
              'token not found.'
          ]
      }, status: 404
      return
    end

    token.destroy
    render json: {
    }
  end
end
