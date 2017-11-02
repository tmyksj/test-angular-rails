class Token < ApplicationRecord
  belongs_to :user

  def self.new_token(user)
    Token.new(user: user, authentication_token: Token.generate_token)
  end

  private

  def self.generate_token
    SecureRandom.uuid
  end
end
