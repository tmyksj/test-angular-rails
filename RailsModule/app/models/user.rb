class User < ApplicationRecord
  has_many :tokens
  has_many :tasks
end
