class EmailsController < ApplicationController

  def welcome
    UserMailer.welcome_email(@user).deliver
  end

end