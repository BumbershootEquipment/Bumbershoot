class OrdersController < ApplicationController
  before_filter :authenticate_user!, only: [:create]

  def create
    item = Item.find(params[:item_id])

  end

  private

  def order_params
    params.require(:order)
  end
end