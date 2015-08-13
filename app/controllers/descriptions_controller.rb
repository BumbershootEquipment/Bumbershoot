class DescriptionsController < ApplicationController
  before_filter :authenticate_user!, only: [:create, :destroy]

  def index
    respond_with Description.all
  end

  def create
    item = Item.find(params[:item_id])
    new_description = Description.create(description_params)
    item.description = new_description
    render :json => new_description
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
