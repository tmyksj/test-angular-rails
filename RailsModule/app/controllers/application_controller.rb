class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  # http://web-salad.hateblo.jp/entry/2015/05/03/170754
  ACCESS_CONTROL_ALLOW_METHODS = %w(GET OPTIONS).freeze
  ACCESS_CONTROL_ALLOW_HEADERS = %w(Accept Origin Content-Type).freeze
  ACCESS_CONTROL_MAX_AGE = 86400

  before_action :set_cors_headers!

  def preflight
    set_preflight_headers!
    head :ok
  end

  private

  def set_cors_headers!
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:4200'
  end

  def set_preflight_headers!
    response.headers['Access-Control-Max-Age'] = ACCESS_CONTROL_MAX_AGE
    response.headers['Access-Control-Allow-Headers'] = ACCESS_CONTROL_ALLOW_HEADERS.join(',')
    response.headers['Access-Control-Allow-Methods'] = ACCESS_CONTROL_ALLOW_METHODS.join(',')
  end
end
