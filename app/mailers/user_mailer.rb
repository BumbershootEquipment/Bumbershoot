class UserMailer < ActionMailer::Base
  default from: "bumbershootequip@gmail.com"

  def welcome_email(user)
    @user = user
    mail(to: @user.email, subject: "Welcome to Bumbershoot")
  end

  def community_order(user, owner)
    @user = user
    @owner = owner
        binding.pry

    mail(to: @user.email, subject: "Community Equipment Order")
  end

  def corporate_order(user)
    @user = user
    mail(to: @user.email, subject: "New order from Bumbershoot")
  end

  def community_item(owner)
    @owner = owner
    mail(to: @owner.email, subject: "Thank you for registering an Item")
  end
end