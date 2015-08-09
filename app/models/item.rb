class Item < ActiveRecord::Base
  belongs_to :category
  has_one :description

  has_attached_file :image, :styles => {
    :thumb => "100x100>",
    :large => "500x500>"
  }
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  def as_json(options = {})
    super(options.merge(include: :description))
  end
end
