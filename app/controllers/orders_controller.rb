class OrdersController < ApplicationController
  before_filter :authenticate_user!, only: [:create]

  def index
    respond_with Order.all
  end

  def get_users_orders(user_id)
    respond_with Order.where(user_id: user_id)
  end

  def get_users_items(owner)
    respond_with Item.where(owner: owner)
  end

  def create
    item = Item.find(params[:item_id])
    order = item.orders.create(order_params)
    render :json => order
  end

  private

  def order_params
    params.require(:order).permit(:comments, :user_id)
  end
end