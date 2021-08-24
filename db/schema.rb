# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_08_21_070004) do

  create_table "liked_posts", charset: "utf8mb3", force: :cascade do |t|
    t.bigint "post_id"
    t.bigint "user_id"
    t.datetime "created_at", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.datetime "updated_at", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.index ["post_id"], name: "index_liked_posts_on_post_id"
    t.index ["user_id", "post_id"], name: "index_liked_posts_on_user_id_and_post_id", unique: true
    t.index ["user_id"], name: "index_liked_posts_on_user_id"
  end

  create_table "pinned_posts", charset: "utf8mb3", force: :cascade do |t|
    t.string "comment", default: "", null: false
    t.bigint "post_id"
    t.bigint "user_id"
    t.datetime "created_at", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.datetime "updated_at", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.index ["post_id"], name: "index_pinned_posts_on_post_id"
    t.index ["user_id", "post_id"], name: "index_pinned_posts_on_user_id_and_post_id", unique: true
    t.index ["user_id"], name: "index_pinned_posts_on_user_id"
  end

  create_table "posts", charset: "utf8mb3", force: :cascade do |t|
    t.text "message"
    t.bigint "user_id"
    t.datetime "created_at", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.datetime "updated_at", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "disliked_posts", charset: "utf8mb3", force: :cascade do |t|
    t.bigint "post_id"
    t.bigint "user_id"
    t.datetime "created_at", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.datetime "updated_at", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.index ["post_id"], name: "index_disliked_posts_on_post_id"
    t.index ["user_id", "post_id"], name: "index_disliked_posts_on_user_id_and_post_id", unique: true
    t.index ["user_id"], name: "index_disliked_posts_on_user_id"
  end

  create_table "users", charset: "utf8mb3", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.string "email", default: "", null: false
    t.string "password_hash", default: "", null: false
    t.string "color", default: "", null: false
    t.datetime "created_at", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.datetime "updated_at", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["name"], name: "index_users_on_name", unique: true
  end

  add_foreign_key "liked_posts", "posts", on_update: :cascade, on_delete: :cascade
  add_foreign_key "liked_posts", "users", on_update: :cascade, on_delete: :cascade
  add_foreign_key "pinned_posts", "posts", on_update: :cascade, on_delete: :cascade
  add_foreign_key "pinned_posts", "users", on_update: :cascade, on_delete: :cascade
  add_foreign_key "posts", "users", on_update: :cascade, on_delete: :cascade
  add_foreign_key "unliked_posts", "posts", on_update: :cascade, on_delete: :cascade
  add_foreign_key "unliked_posts", "users", on_update: :cascade, on_delete: :cascade
end
