class UserMailer < ActionMailer::Base
  default from: "bumbershootequip@example.com"

  def welcome_email(user)
    @user = user
    mail(to: @user.email, subject: "Welcome to Bumbershoot")
  end
end