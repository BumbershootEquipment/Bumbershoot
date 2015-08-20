class Item < ActiveRecord::Base
  acts_as_sellable
  belongs_to :category
  has_one :description

  def as_json(options = {})
    super(options.merge(include: :description))
  end
end
