class AddDetailsToItems < ActiveRecord::Migration
  def change
    add_column :items, :paypalID, :string
    add_column :items, :price, :decimal
  end
end
