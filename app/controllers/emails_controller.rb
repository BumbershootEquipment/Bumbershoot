class EmailsController < ApplicationController

  def welcome
    @user = User.last
    UserMailer.welcome_email(@user).deliver
    render nothing: true
  end

end