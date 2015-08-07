class DescriptionsController < ApplicationController

  def index
    respond_with Description.all
  end

  def create
    item = Item.find(params[:item_id])
    description = item.description.create(description_params)
    respond_with item, description
  end

  def destroy
    item = Item.find(params[:item_id])
    item.description.destroy
  end

  private
  def description_params
    params.require(:description).permit(:body, :size, :color)
  end
end
