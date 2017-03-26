﻿namespace api.Service.Impl
{
    using System;
    using System.Collections.Generic;
    using Common;
    using api.Context;
    using api.Repository;
    using api.Repository.Impl;
    public class CategoryService : ICategoryService
    {
        public Category CreateCategory(Category category)
        {
            ValidateCreateCategoryRequest(category);
            ICategoryRepository repo = new CategoryRepository();
            return repo.Create(category);
        }

        private void ValidateCreateCategoryRequest(Category category)
        {
            var validation = new ValidationException();
            if (string.IsNullOrWhiteSpace(category.Name)) {
                validation.AddError("category.createCategory.nameIsRequired");
            }
            if (string.IsNullOrWhiteSpace(category.Key)) {
                validation.AddError("category.createCategory.keyIsRequired");
            }
            validation.ThrowIfError();
        }

        public IList<Category> GetCategories()
        {
            ICategoryRepository repo = new CategoryRepository();
            return repo.GetCategories();
        }

        public LogInResponse LogIn(LogInRequest request)
        {
            ValidationLogInRequest(request);
            ICategoryRepository repo = new CategoryRepository();
            Category item = repo.GetCategoryByName(request.Name);
            return new LogInResponse(item.Name, item.Key, item.Description);
        }

        private void ValidationLogInRequest(LogInRequest request)
        {
            var validation = new ValidationException();
            if (string.IsNullOrWhiteSpace(request.Name)) {
                validation.AddError("category.LogIn.nameIsRequired");
            }
            validation.ThrowIfError();
        }
    }
}