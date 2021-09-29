class Show < ApplicationRecord
    validates :title, presence: true
    has_many :ratings, dependent: :destroy
    has_many :users, through: :ratings
end
