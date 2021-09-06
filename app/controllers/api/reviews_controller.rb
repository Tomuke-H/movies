class Api::ReviewsController < ApplicationController
    before_action :set_movie

    def index
        render json: @movie.reviews.all
    end

    def create
    end

    def update
    end

    def destroy
    end

    private

    def review_params
        params.require(:review).permit(:text, :author)
    end

    def set_movie
        @movie = Movie.find(params[:movie_id])
    end

end
