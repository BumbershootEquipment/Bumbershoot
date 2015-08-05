class CreateDescriptions < ActiveRecord::Migration
  def change
    create_table :descriptions do |t|
      t.string :size
      t.string :color
      t.string :body
      t.references :item, index: true

      t.timestamps
    end
  end
end
