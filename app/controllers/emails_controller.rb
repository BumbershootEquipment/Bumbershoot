class EmailsController < ApplicationController

  def welcome
    @user = User.last
    UserMailer.welcome_email(@user).deliver
    render nothing: true
  end

  def community_order
    @user = User.find(params["user_id"])
    @owner = User.find(params["owner_id"])
    UserMailer.community_order(@user, @owner).deliver
    render nothing: true
  end

  def corporate_order
    @user = User.find(params['id'])
    UserMailer.corporate_order(@user).deliver
    render nothing: true
  end

  def community_item
    @owner = User.find(params["id"])
    UserMailer.community_item(@owner).deliver
    render nothing: true
  end
end