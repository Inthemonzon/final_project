class ShowsController < ApplicationController
    before_action :authorize

    def index
        shows = Show.all
        render json: shows
    end

    
    def show_user_shows
        shows = Show.where(user_id: params[:id])
        render json: shows
    end

    def show
        show = Show.find_by(id: params[:id])
        render json: show
    end

    def destroy
        show = Show.find_by(id: params[:id])
        if show
            show.destroy
            head :no_content
        else
            render json: { error: "Show not found" }, status: :not_found
        end
    end

    private

    def show_params
        params.permit(:title, :genre, :description, :image_url)
	end

    def authorize
        return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
    end
end

