class UsersController < ApplicationController
  
  def index
  	@all = User.all
  	render :json => @all
  end

  def show
  end

  def create
  	puts "====created=====" 
  	puts params[:name]
  	@creU = User.create(name: params[:name])
  	render :json => @creU
  end
end
