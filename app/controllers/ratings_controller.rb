class RatingsController < ApplicationController
    def create
        rating = Rating.create!(rating_params)
        render json: rating, status: :created
    end

    private

    def rating_params
        params.permit(:user_id, :show_id :score, :note).with_defaults(user_id: session[:user_id])
	end
end
