class RatingSerializer < ActiveModel::Serializer
  attributes :id, :score, :note, :user_id, :show_id
end
