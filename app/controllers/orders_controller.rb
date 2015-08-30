class OrdersController < ApplicationController
  before_filter :authenticate_user!, only: [:create]

  def index
    respond_with Order.all
  end

  def create
    item = Item.find(params[:item_id])
    order = item.orders.create(order_params)
    respond_with order
  end

  private

  def order_params
    params.require(:order)
  end
end