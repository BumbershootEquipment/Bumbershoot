class ItemsController < ApplicationController

  def index
    respond_with Item.all
  end

  def create
    category = Category.find(params[:category_id])
    item = category.items.create(item_params)
    respond_with category, item
  end

  def show
    respond_with Item.find(params[:id])
  end

  private
  def item_params
    params.require(:item).permit(:name, :image)
  end
end
