class ItemsController < ApplicationController
  before_filter :authenticate_user!, only: [:create]
  def index
    respond_with Item.all
  end

  def create
    category = Category.find(params[:category_id])
    binding.pry
    item = category.items.create(item_params)
    respond_with category, item
  end

  def show
    respond_with Item.find(params[:id])
  end

  private
  def item_params
    params.require(:item).permit(:name, :image, :corporate, :neighborhood, :paypalID)
  end
end
