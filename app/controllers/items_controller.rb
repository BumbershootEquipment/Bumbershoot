class ItemsController < ApplicationController

  def index
    respond_with Item.all
  end

  def create
    respond_with Post.create(post_params)
  end

  def show
    respond_with Post.find(params[:id])
  end

  private
  def item_params
    params.require(:post).permit(:name)
  end
end
