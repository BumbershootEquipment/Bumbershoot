class AddNeighborhoodToItems < ActiveRecord::Migration
  def change
    add_column :items, :neighborhood, :string
    add_column :items, :owner, :string
  end
end
