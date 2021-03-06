class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :text
      t.string :author
      t.belongs_to :movie, null: false, foreign_key: true

      t.timestamps
    end
  end
end
