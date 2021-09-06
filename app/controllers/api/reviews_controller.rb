class Api::ReviewsController < ApplicationController
    before_action :set_movie

    def index
        render json: @movie.reviews.all
    end

    def create
        @review = @movie.reviews.new(review_params)
        if(@review.save)
            render json: @review
        else
            render json: {errors: @review.errors}, status: :unprocessable_entity
        end
    end

    def update
        @review = @movie.reviews.find(params[:id])
        if(@review.update(review_params))
            render json: @review
        else
            render json: {errors: @review.errors}, status: :unprocessable_entity
        end
    end

    def destroy
        @review = @movie.reviews.find(params[:id])
        render json: @review.destroy
    end

    private

    def review_params
        params.require(:review).permit(:text, :author)
    end

    def set_movie
        @movie = Movie.find(params[:movie_id])
    end

end
