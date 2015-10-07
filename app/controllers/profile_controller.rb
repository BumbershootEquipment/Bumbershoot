class ProfileController < ApplicationController

  def get_user_items
    respond_with Item.where(owner: params[:owner])
  end

  def get_user_orders
    respond_with Order.where(user_id: params[:user_id])
  end

end