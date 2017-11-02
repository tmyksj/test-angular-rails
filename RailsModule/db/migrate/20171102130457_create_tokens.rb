class CreateTokens < ActiveRecord::Migration[5.1]
  def change
    create_table :tokens do |t|
      t.string :authentication_token
      t.references :user, foreign_key: true

      t.timestamps
    end
    add_index :tokens, :authentication_token
  end
end
