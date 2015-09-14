class EmailsController < ApplicationController

  def welcome(user)
    @user = user
    UserMailer.welcome_email(@user).deliver
  end

end