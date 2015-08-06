class ItemsController < ApplicationController

  def index
    respond_with Item.all
  end

  def create
    respond_with Item.create(item_params)
  end

  def show
    respond_with Item.find(params[:id])
  end

  private
  def item_params
    params.require(:item).permit(:name)
  end
end
