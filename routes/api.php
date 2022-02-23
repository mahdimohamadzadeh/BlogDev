<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ApiPostController;
use App\Http\Controllers\Api\ApiProductController;
use App\Http\Controllers\Api\ApiCommentController;
use App\Http\Controllers\Api\ApiLikeController;
use App\Http\Controllers\Api\ApiAuthController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// public Route
Route::apiResource('post', ApiPostController::class);
Route::get('newPosts', [ApiProductController::class, 'orderById']);
Route::get('randomPosts', [ApiProductController::class, 'randomProduct']);
Route::apiResource('comment', ApiCommentController::class);
Route::get('/post/{id}/comments', [ApiCommentController::class, 'AllCommentPost']);
Route::get('/post/{id}/comment/{idComment}', [ApiCommentController::class, 'show']);


// protected Route
//Route::group(['middleware' => ['auth:sanctum']],function (){
//
//});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('pLikeComment/{id}', [ApiLikeController::class, 'plusLikeComment']);
Route::get('mLikeComment/{id}', [ApiLikeController::class, 'minusLikeComment']);
