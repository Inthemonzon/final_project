class ShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :description, :image_url
  has_many :users
end
