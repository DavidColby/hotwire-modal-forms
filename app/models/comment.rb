class Comment < ApplicationRecord
  validates_presence_of :body
end
