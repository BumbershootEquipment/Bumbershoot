class Item < ActiveRecord::Base
  belongs_to :category
  has_one :description

  def as_json(options = {})
    super(options.merge(include: :description))
  end
end
