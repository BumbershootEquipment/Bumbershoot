class ProfileController < ApplicationController

  def get_user_items
    respond_with Item.where(owner_id: params[:user_id])
  end

  def get_user_orders
    respond_with Order.where(user_id: params[:user_id])
  end

  private

  def profile_params
    params.require(:profile).permit(:user_id)
  end

end