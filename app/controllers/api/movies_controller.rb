class Api::MoviesController < ApplicationController

    def index
        render json: Movie.all
    end

    def create
        @movie = Movie.new(movie_params)
        if(@movie.save)
            render json: @movie
        else
            render json: {errors: @movie.errors}, status: :unprocessable_entity
        end
    end
    
    def update
        @movie = Movie.find(params[:id])
        if(@movie.update(movie_params))
            render json: @movie
        else
            render json: {errors: @movie.errors}, status: :unprocessable_entity
        end
    end

    def destroy 
        @movie = Movie.find(params[:id])
        render json: @movie.destroy
    end

    private

    def movie_params
        params.require(:movie).permit(:title, :genre)
    end

end
