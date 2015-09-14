class AddCorporateToItems < ActiveRecord::Migration
  def change
    add_column :items, :corporate, :boolean
  end
end
