class CategoriesController < ApplicationController

  def create
    category = Category.create(category_params)
    respond_with category
  end

  def index
    respond_with Category.all
  end

  def show
    respond_with Category.find(params[:id])
  end

  def destroy
    category = Category.find(params[:id])
    category.destroy
  end

  private
  def category_params
    params.require(:category).permit(:name)
  end
end
